import { Mail, Phone, MapPin, Paperclip, X } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [attachedFiles, setAttachedFiles] = useState<File[]>([])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || [])
        const validFiles = files.filter(file => {
            // Ограничиваем размер файла до 10MB
            if (file.size > 10 * 1024 * 1024) {
                alert(`File ${file.name} is too large. Maximum size is 10MB.`)
                return false
            }
            return true
        })
        setAttachedFiles(prev => [...prev, ...validFiles])
    }

    const removeFile = (index: number) => {
        setAttachedFiles(prev => prev.filter((_, i) => i !== index))
    }

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
    
        try {
          const formDataToSend = new FormData()
          formDataToSend.append('name', formData.name)
          formDataToSend.append('email', formData.email)
          formDataToSend.append('message', formData.message)
          
          // Добавляем файлы
          attachedFiles.forEach((file, index) => {
            formDataToSend.append(`attachment_${index}`, file)
          })

          const response = await fetch('/api/contact', {
            method: 'POST',
            body: formDataToSend, // Убираем Content-Type header для FormData
          })
    
          if (response.ok) {
            setSubmitStatus("success")
            setFormData({ name: "", email: "", message: "" })
            setAttachedFiles([])
          } else {
            setSubmitStatus("error")
          }
        } catch (error) {
          console.error('Error sending message:', error)
          setSubmitStatus("error")
        } finally {
          setIsSubmitting(false)
          setTimeout(() => setSubmitStatus("idle"), 3000)
        }
    }

      
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">Get In Touch</h2>

            <div className="grid lg:grid-cols-2 gap-12">
                <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Start a Conversation</h3>
                <p className="text-lg text-muted-foreground mb-8 text-pretty">
                    I'm always interested in new opportunities and exciting projects. Whether you have a specific idea in
                    mind or just want to explore possibilities, I'd love to hear from you.
                </p>

                <div className="space-y-6">
                    <Card className="glass-card">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <Mail className="text-primary" size={24} />
                        </div>
                        <div>
                            <h4 className="font-semibold">Email</h4>
                            <a 
                              href="mailto:arman.raf2001@gmail.com" 
                              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                            >
                              arman.raf2001@gmail.com
                            </a>
                        </div>
                        </div>
                    </CardContent>
                    </Card>

                    <Card className="glass-card">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                        <div className="p-3 bg-secondary/10 rounded-lg">
                            <Phone className="text-secondary" size={24} />
                        </div>
                        <div>
                            <h4 className="font-semibold">Phone</h4>
                            <a 
                              href="tel:+37498983797" 
                              className="text-muted-foreground hover:text-secondary transition-colors cursor-pointer"
                            >
                              +374 98 983797
                            </a>
                        </div>
                        </div>
                    </CardContent>
                    </Card>

                    <Card className="glass-card">
                    <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <MapPin className="text-primary" size={24} />
                        </div>
                        <div>
                            <h4 className="font-semibold">Location</h4>
                            <a 
                              href="https://maps.app.goo.gl/bfjTZoYeyv5nLEZ28" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                            >
                              Yerevan, Armenia
                            </a>
                        </div>
                        </div>
                    </CardContent>
                    </Card>
                </div>
                </div>

                <Card className="glass-card">
                <CardContent className="p-8">
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                        </label>
                        <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                        required
                        />
                    </div>

                    {/* File Attachment */}
                    <div>
                        <label className="block text-sm font-medium mb-2">
                            Attachments (optional)
                        </label>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <input
                                    type="file"
                                    id="file-upload"
                                    multiple
                                    onChange={handleFileChange}
                                    className="hidden"
                                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif,.zip,.rar"
                                />
                                <label
                                    htmlFor="file-upload"
                                    className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg cursor-pointer hover:bg-accent/10 transition-colors"
                                >
                                    <Paperclip size={16} />
                                    <span className="text-sm">Attach Files</span>
                                </label>
                                <span className="text-xs text-muted-foreground">
                                    Max 10MB per file
                                </span>
                            </div>
                            
                            {/* Attached Files List */}
                            {attachedFiles.length > 0 && (
                                <div className="space-y-2">
                                    {attachedFiles.map((file, index) => (
                                        <div key={index} className="flex items-center justify-between p-2 bg-accent/5 rounded-lg border border-border">
                                            <div className="flex items-center gap-2">
                                                <Paperclip size={14} className="text-muted-foreground" />
                                                <span className="text-sm truncate max-w-[200px]">{file.name}</span>
                                                <span className="text-xs text-muted-foreground">
                                                    ({(file.size / 1024 / 1024).toFixed(1)} MB)
                                                </span>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeFile(index)}
                                                className="p-1 hover:bg-destructive/10 rounded transition-colors"
                                            >
                                                <X size={14} className="text-muted-foreground hover:text-destructive" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>

                    {submitStatus === "success" && <p className="text-center text-primary">Message sent successfully!</p>}
                    {submitStatus === "error" && <p className="text-center text-destructive">Failed to send message. Please try again.</p>}
                    </form>
                </CardContent>
                </Card>
            </div>
            </div>
        </section>
    )
}