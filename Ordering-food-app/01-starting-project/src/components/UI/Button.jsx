export default function Button({ children, textOnly, className, ...props }) {
  var cssClass = textOnly ? "text-button" : "button";
  cssClass += " " + className;

  return <button className={cssClass} {...props}>{children}</button>;
}
