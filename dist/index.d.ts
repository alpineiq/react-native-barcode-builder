declare type props = {
    value: string;
    format: string;
    width: number;
    height: number;
    text?: string;
    textColor: string;
    lineColor: string;
    background: string;
    onError?: (error: Error) => any;
};
declare const Barcode: ({ value, format, width, height, text, textColor, lineColor, background, onError, }: props) => JSX.Element;
export default Barcode;
