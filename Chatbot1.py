class MuseumChatbot:
    def __init__(self):
        self.date = None
        self.time_slot = None
        self.adults = 0
        self.children = 0
        self.total_price = 0
        self.upi_id = None

    def start_conversation(self):
        print("Chatbot: Hello! Welcome to the Indian Museum ticket booking service. How may I assist you today?")
        user_input = input("User: ")
        if "book ticket" in user_input.lower():
            self.ask_date()

    def ask_date(self):
        print("Chatbot: Please select the date for your visit (e.g., 18-09-2024):")
        self.date = input("User: ")
        if self.is_closed_day(self.date):
            print(f"Chatbot: The museum is closed on {self.date}. Please choose another date.")
            self.ask_date()
        else:
            self.ask_time_slot()

    def ask_time_slot(self):
        print("Chatbot: Please select your preferred time slot:")
        print("1. 10:00 AM - 11:00 AM\n2. 11:00 AM - 12:00 PM\n3. 12:00 PM - 1:00 PM\n4. 1:00 PM - 2:00 PM")
        print("5. 2:00 PM - 3:00 PM\n6. 3:00 PM - 4:00 PM\n7. 4:00 PM - 5:00 PM")
        time_slots = {
            "1": "10:00 AM - 11:00 AM",
            "2": "11:00 AM - 12:00 PM",
            "3": "12:00 PM - 1:00 PM",
            "4": "1:00 PM - 2:00 PM",
            "5": "2:00 PM - 3:00 PM",
            "6": "3:00 PM - 4:00 PM",
            "7": "4:00 PM - 5:00 PM"
        }
        selected_slot = input("User: ")
        if selected_slot in time_slots:
            self.time_slot = time_slots[selected_slot]
            self.ask_visitors()
        else:
            print("Chatbot: Invalid selection, please choose again.")
            self.ask_time_slot()

    def ask_visitors(self):
        self.adults = int(input("Chatbot: How many adults? User: "))
        self.children = int(input("Chatbot: How many children? User: "))
        self.calculate_price()

    def calculate_price(self):
        self.total_price = (self.adults * 100) + (self.children * 50)
        print(f"Chatbot: The total price is ₹{self.total_price}. Would you like to proceed to payment?")
        user_input = input("User: ")
        if "yes" in user_input.lower():
            self.ask_payment_method()

    def ask_payment_method(self):
        print("Chatbot: Please select a payment method:\n1. Credit/Debit Card\n2. UPI\n3. Net Banking")
        payment_method = input("User: ")
        if payment_method == "2":
            self.ask_upi_id()
        else:
            print("Chatbot: Currently, only UPI is supported. Please select UPI for payment.")
            self.ask_payment_method()

    def ask_upi_id(self):
        self.upi_id = input("Chatbot: Please enter your UPI ID: User: ")
        print(f"Chatbot: Payment of ₹{self.total_price} is being processed...")
        self.confirm_booking()

    def confirm_booking(self):
        print("Chatbot: Payment successful!")
        print("Chatbot: Here is your booking confirmation. (Shows QR code)")
        print(f"Chatbot: Booking for {self.date} at {self.time_slot}. Total visitors: {self.adults} adults, {self.children} children.")
        print("Chatbot: Thank you for booking with us! Enjoy your visit to the museum.")

    def is_closed_day(self, date):
        # Mock function for checking if the museum is closed on that date (e.g., Mondays or holidays)
        closed_days = ["Monday"]
        return False  # Here you can add logic to check for holidays and closed days

if __name__ == "__main__":
    chatbot = MuseumChatbot()
    chatbot.start_conversation()
