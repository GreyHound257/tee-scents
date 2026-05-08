export type PaymentMethod = "Transfer" | "POD";

export const getWhatsAppLink = (
  productName: string,
  paymentMethod: PaymentMethod = "Transfer"
) => {
  const phoneNumber = "2349012964699";

  const paymentText =
    paymentMethod === "POD"
      ? "I'd prefer to Pay on Delivery if available."
      : "I'll be paying via Bank Transfer.";

  const message = `Hi Tee Scents! 👋 I'm interested in the "${productName}" perfume. ${paymentText} Could you confirm availability?`;

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
// 2349012964699