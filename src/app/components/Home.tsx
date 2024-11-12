import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Film, Paintbrush, Users } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <Code className="h-6 w-6 mr-2" />
                    <span className="font-bold">Null Bytes</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
                        Services
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#experience">
                        Experience
                    </Link>
                    <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
                        Contact
                    </Link>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Welcome to Null Bytes
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Your one-stop solution for web development, video editing, and logo designing. We bring your digital visions to life.
                                </p>
                            </div>
                            <div className="space-x-4">
                                <Button>Get Started</Button>
                                <Button variant="outline">Learn More</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Services</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Code className="w-4 h-4 mr-2" />
                                        Web Development
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>We create responsive, user-friendly websites tailored to your needs. From simple landing pages to complex web applications, we've got you covered.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Film className="w-4 h-4 mr-2" />
                                        Video Editing
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Transform your raw footage into compelling visual stories. Our expert editors ensure your videos captivate and engage your audience.</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Paintbrush className="w-4 h-4 mr-2" />
                                        Logo Designing
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>Get a unique, memorable logo that represents your brand. Our designers create visuals that make lasting impressions.</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Experience</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Code className="w-4 h-4 mr-2" />
                                        Web Development
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>1 year of experience crafting beautiful, functional websites.</p>
                                    <p className="mt-2 flex items-center">
                                        <Users className="w-4 h-4 mr-2" />
                                        <span>4 happy clients</span>
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Film className="w-4 h-4 mr-2" />
                                        Video Editing
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>3 years of experience creating engaging video content.</p>
                                    <p className="mt-2 flex items-center">
                                        <Users className="w-4 h-4 mr-2" />
                                        <span>10 happy clients</span>
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Paintbrush className="w-4 h-4 mr-2" />
                                        Logo Designing
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>3 years of experience designing impactful brand identities.</p>
                                    <p className="mt-2 flex items-center">
                                        <Users className="w-4 h-4 mr-2" />
                                        <span>5 happy clients</span>
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
                <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
                                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Join our growing list of satisfied clients. Let's bring your ideas to life. Contact us today for a free consultation.
                                </p>
                            </div>
                            <div className="w-full max-w-sm space-y-2">
                                <Button className="w-full">Contact Us</Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Null Bytes. All rights reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </Link>
                    <Link className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    )
}