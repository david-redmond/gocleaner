interface IProps {
  action: string;
  category: string;
  label: string;
  value: string | number;
}
const trackEvent = ({ action, category, label, value }: IProps) => {
  if ((window as any).gtag) {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  } else {
    console.warn("Google Analytics is not initialized");
  }
};

export default trackEvent;
