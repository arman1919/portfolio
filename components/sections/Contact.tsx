import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
    
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
    
          if (response.ok) {
            setSubmitStatus("success")
            setFormData({ name: "", email: "", message: "" })
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
                            <p className="text-muted-foreground">arman.raf2001@gmail.com</p>
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
                            <p className="text-muted-foreground">+374 98 983797</p>
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
                            <p className="text-muted-foreground">Yerevan, Armenia</p>
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