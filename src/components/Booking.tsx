import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const Booking = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut) {
      toast.error("Please select check-in and check-out dates");
      return;
    }
    
    // Format the booking details for WhatsApp
    const message = `*New Booking Request - Niva Villa*

📝 *Guest Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Number of Guests: ${formData.guests}

📅 *Stay Dates:*
Check-in: ${format(checkIn, "PPP")}
Check-out: ${format(checkOut, "PPP")}

${formData.message ? `💬 *Special Requests:*\n${formData.message}` : ""}

---
Sent from Niva Website`;

    // Open WhatsApp with pre-filled message - use mobile-friendly format
    const phoneNumber = "918553071171";
    const encodedMessage = encodeURIComponent(message);
    
    // Try to detect if mobile or desktop
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    let whatsappUrl;
    if (isMobile) {
      // For mobile devices, use the app link
      whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
    } else {
      // For desktop, use web.whatsapp.com
      whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    }
    
    // Open in new window
    const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    
    if (newWindow) {
      toast.success("Opening WhatsApp... Please send the message to complete your booking request.");
    } else {
      // If popup was blocked, show alternative
      toast.error("Please allow popups or click the button below to send via WhatsApp", {
        duration: 5000,
      });
    }
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      guests: "",
      message: "",
    });
    setCheckIn(undefined);
    setCheckOut(undefined);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="booking" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Reserve Your Stay
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-muted-foreground">
            Plan your peaceful retreat at Niva. Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-12 shadow-earth space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests</Label>
              <Input
                id="guests"
                name="guests"
                type="number"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                required
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Check-in Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal rounded-xl",
                      !checkIn && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date) => date < new Date()}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label>Check-out Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal rounded-xl",
                      !checkOut && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) => date < (checkIn || new Date())}
                    initialFocus
                    className="pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Special Requests (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="rounded-xl"
              placeholder="Any special requirements or questions..."
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl py-6 text-lg transition-all hover:scale-[1.02]"
          >
            Submit Booking Request
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Booking;
