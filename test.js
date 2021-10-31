class Options {
    constructor(height, width, bg, fontSize, textAling) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAling = textAling;
    }

    createDiv() {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = 'Hello Doppelganger!';
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
		div.style.cssText = param;
    }
}
const item = new Options(300, 350, "red", 14, "center");
item.createDiv();