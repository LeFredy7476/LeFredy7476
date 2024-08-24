
const copyrightWidth = 32;
const spaceWidth = 160;
const letterHeight = 700;
const letterMaxWidth = 352;
// const lineWidth = 2;

const charMemory = {
    "a": null,
    "b": null,
    "c": null,
    "d": null,
    "e": null,
    "f": null,
    "g": null,
    "h": null,
    "i": null,
    "j": null,
    "k": null,
    "l": null,
    "m": null,
    "n": null,
    "o": null,
    "p": null,
    "q": null,
    "r": null,
    "s": null,
    "t": null,
    "u": null,
    "v": null,
    "w": null,
    "x": null,
    "y": null,
    "z": null,
    "agrave": null,
    "ccedilla": null,
    "eacute": null,
    "ecircumflex": null,
    "edieresis": null,
    "egrave": null,
    "idieresis": null,
    "majA": null,
    "majB": null,
    "majC": null,
    "majD": null,
    "majE": null,
    "majF": null,
    "majG": null,
    "majH": null,
    "majI": null,
    "majJ": null,
    "majK": null,
    "majL": null,
    "majM": null,
    "majN": null,
    "majO": null,
    "majP": null,
    "majQ": null,
    "majR": null,
    "majS": null,
    "majT": null,
    "majU": null,
    "majV": null,
    "majW": null,
    "majX": null,
    "majY": null,
    "majZ": null,
    "majEacute": null,
    "majEcircumflex": null,
    "majEdieresis": null,
    "majEgrave": null,
    "majIcircumflex": null,
    "majIdieresis": null,
    "hyphen": null,
    "quotesingle": null,
    "space": {
        name: "space",
        isLoaded: function() {return true},
        getWidth: function() {},
        save: function() {charMemory[this.name] = this},
        image1: null,
        image2: null,
        image3: null,
        image4: null,
        width: spaceWidth
    }
}

const charNames = {
    "a": "a",
    "b": "b",
    "c": "c",
    "d": "d",
    "e": "e",
    "f": "f",
    "g": "g",
    "h": "h",
    "i": "i",
    "j": "j",
    "k": "k",
    "l": "l",
    "m": "m",
    "n": "n",
    "o": "o",
    "p": "p",
    "q": "q",
    "r": "r",
    "s": "s",
    "t": "t",
    "u": "u",
    "v": "v",
    "w": "w",
    "x": "x",
    "y": "y",
    "z": "z",
    "à": "agrave",
    "ç": "ccedilla",
    "é": "eacute",
    "ê": "ecircumflex",
    "ë": "edieresis",
    "è": "egrave",
    "ï": "idieresis",
    "A": "majA",
    "B": "majB",
    "C": "majC",
    "D": "majD",
    "E": "majE",
    "F": "majF",
    "G": "majG",
    "H": "majH",
    "I": "majI",
    "J": "majJ",
    "K": "majK",
    "L": "majL",
    "M": "majM",
    "N": "majN",
    "O": "majO",
    "P": "majP",
    "Q": "majQ",
    "R": "majR",
    "S": "majS",
    "T": "majT",
    "U": "majU",
    "V": "majV",
    "W": "majW",
    "X": "majX",
    "Y": "majY",
    "Z": "majZ",
    "É": "majEacute",
    "Ê": "majEcircumflex",
    "Ë": "majEdieresis",
    "È": "majEgrave",
    "Î": "majIcircumflex",
    "Ï": "majIdieresis",
    "-": "hyphen",
    "'": "quotesingle",
    " ": "space"
}

const borderMemory = [
    {
        used: true,
        isLoaded: function() {return true},
        imageLeft: null,
        imageFill: null,
        imageSep: null,
        imageRight: null,
        createPattern: function(ctx) {},
        pattern: null,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        sepWidth: 0
    },
    {
        used: false,
        isLoaded: function() {return this.used && this.imageLeft.complete && this.imageFill.complete
            && this.imageSep.complete && this.imageRight.complete},
        imageLeft: new Image(),
        imageFill: new Image(),
        imageSep: new Image(),
        imageRight: new Image(),
        createPattern: function(ctx) {if (this.pattern === null) {this.pattern = ctx.createPattern(this.imageFill, "repeat-x")}},
        pattern: null,
        left: 12,
        right: 12,
        top: 12,
        bottom: 12,
        sepWidth: 12
    },
    {
        used: false,
        isLoaded: function() {return this.used && this.imageLeft.complete && this.imageFill.complete
            && this.imageSep.complete && this.imageRight.complete},
        imageLeft: new Image(),
        imageFill: new Image(),
        imageSep: new Image(),
        imageRight: new Image(),
        createPattern: function(ctx) {if (this.pattern === null) {this.pattern = ctx.createPattern(this.imageFill, "repeat-x")}},
        pattern: null,
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
        sepWidth: 12
    },
    {
        used: false,
        isLoaded: function() {return this.used && this.imageLeft.complete && this.imageFill.complete
            && this.imageSep.complete && this.imageRight.complete},
        imageLeft: new Image(),
        imageFill: new Image(),
        imageSep: new Image(),
        imageRight: new Image(),
        createPattern: function(ctx) {if (this.pattern === null) {this.pattern = ctx.createPattern(this.imageFill, "repeat-x")}},
        pattern: null,
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
        sepWidth: 36
    },
    {
        used: false,
        isLoaded: function() {return this.used && this.imageLeft.complete && this.imageFill.complete
            && this.imageSep.complete && this.imageRight.complete},
        imageLeft: new Image(),
        imageFill: new Image(),
        imageSep: new Image(),
        imageRight: new Image(),
        createPattern: function(ctx) {if (this.pattern === null) {this.pattern = ctx.createPattern(this.imageFill, "repeat-x")}},
        pattern: null,
        left: 18,
        right: 18,
        top: 18,
        bottom: 18,
        sepWidth: 32
    }
]

function getLetterSourceImages(letter) {
    let name = charNames[letter];
    if (charMemory[name] === null) {
        let obj = {
            name: name,
            isLoaded: function() {
                let loaded = this.image1.complete && this.image2.complete && this.image3.complete && this.image4.complete;
                if (loaded) {
                    this.getWidth();
                }
                return loaded;
            },
            getWidth: function() {this.width = this.image1.naturalWidth},
            save: function() {charMemory[this.name] = this},
            image1: new Image(),
            image2: new Image(),
            image3: new Image(),
            image4: new Image(),
            width: null
        };
        obj.image1.src = "data:image/png;base64," + document.querySelector("#letter-" + obj.name + "-1").innerHTML;
        obj.image2.src = "data:image/png;base64," + document.querySelector("#letter-" + obj.name + "-2").innerHTML;
        obj.image3.src = "data:image/png;base64," + document.querySelector("#letter-" + obj.name + "-3").innerHTML;
        obj.image4.src = "data:image/png;base64," + document.querySelector("#letter-" + obj.name + "-4").innerHTML;
        obj.save();
        return obj;
    } else {
        return charMemory[name];
    }
}

var copyrightImage = null;

function getLettersImages(string) {
    let chars = string.trim().split("");
    chars = chars.map(getLetterSourceImages);
    return chars
}

// function waitForImages(array, then) {
//     let allLoaded = true;
//     for (let i = 0; i < array.length; i++) {allLoaded &&= array[i].isLoaded()}
//     if (allLoaded) {
//         then(array);
//     }
//     else {
//         setTimeout(waitForImage, 10, array, then);
//     }
// }

function loadImages(array) {
    return new Promise((resolve, reject) => {
        let interval = setInterval(() => {
            let allLoaded = true;
            for (let i = 0; i < array.length; i++) {allLoaded &&= array[i].isLoaded()}
            if (allLoaded) {
                clearInterval(interval);
                resolve(array);
            } else {
                // console.log("image not loaded");
                // console.log(array);
            }
        }, 10);
    })
}

function resizeCanvas(canvas, preview, w, h) {
    canvas.width = w;
    canvas.height = h;
    preview.width = 400 / h * w;
    preview.height = 400;
}

function autoResizeCanvas(canvas, preview, chars, border, options) {
    let lettersWidth = getLettersTotalWidth(chars, options);
    let lettersQty = chars.length;
    let spacingWidth = lettersQty * options.spacing * 2;
    let borderWidth = copyrightWidth + border.left + border.sepWidth * (lettersQty - 1) + border.right;
    let borderHeight = border.top + border.bottom;
    resizeCanvas(canvas, preview, lettersWidth + spacingWidth + borderWidth /*+ lineWidth * 2*/, letterHeight + borderHeight /*+ lineWidth * 2*/);
}

function loadBorder(border) {
    return new Promise((resolve, reject) => {
        let interval = setInterval(() => {
            if (border.isLoaded()) {
                clearInterval(interval);
                resolve(border);
            } else {
                console.log("border not loaded");
            }
        }, 10);
    })
}

function getCopyright() {
    if (copyrightImage === null) {
        copyrightImage = new Image;
        copyrightImage.src = "data:image/png;base64," + document.querySelector("#assets-copyright").innerHTML;
    }
}

function getBorder(num) {
    if (!borderMemory[num].used) {
        borderMemory[num].imageLeft.src = "data:image/png;base64," + document.querySelector("#border-left-" + num).innerHTML;
        borderMemory[num].imageFill.src = "data:image/png;base64," + document.querySelector("#border-fill-" + num).innerHTML;
        borderMemory[num].imageSep.src = "data:image/png;base64," + document.querySelector("#border-sep-" + num).innerHTML;
        borderMemory[num].imageRight.src = "data:image/png;base64," + document.querySelector("#border-right-" + num).innerHTML;
        borderMemory[num].used = true;
    }
    return borderMemory[num]
}

function getOptions() {
    let border = parseInt(document.querySelector("#word-builder-settings-bordertype").value);
    let isolated_elem = document.querySelector("#word-builder-settings-cadre");
    isolated_elem.disabled = border === 0;
    return {
        interligne: false,
        tree: false,
        spacing: 0,
        isolated: isolated_elem.checked,
        border: border,
        eqwidth: document.querySelector("#word-builder-settings-eqwidth").checked
    }
}

function validateString(string) {
    let out = "";
    let keys = Object.keys(charNames);
    // console.log(keys);
    for (let i = 0; i < string.length; i++) {
        if (keys.indexOf(string[i]) != -1) {
            out += string[i];
        }
    }
    return out;
}

function mainDraw(string) {
    string = validateString(string);
    let download = document.querySelector("#word-builder-download");
    let copy = document.querySelector("#word-builder-copy");
    let canvas = document.querySelector("#word-builder-canvas");
    let ctx = canvas.getContext("2d");
    let preview = document.querySelector("#word-builder-preview");
    let pctx = preview.getContext("2d");
    let options = getOptions();
    getCopyright();
    let chars = getLettersImages(string);
    let border = getBorder(options.border);
    if (string) {
        new Promise((resolve, reject) => {
            let interval = setInterval(() => {
                if (copyrightImage.complete) {
                    clearInterval(interval);
                    resolve(copyrightImage);
                } else {
                    console.log("border not loaded");
                }
            }, 10);
        }).then((copyrightImage) => {
            loadBorder(border).then((border) => {
                loadImages(chars).then((chars) => {
                    border.createPattern(ctx);
                    // console.log(chars);
                    autoResizeCanvas(canvas, preview, chars, border, options);
                    clearCanvas(canvas, ctx);
                    drawLetters(ctx, chars, border, options);
                    drawPreview(pctx, preview, canvas);
                    download.href = canvas.toDataURL("image/png");
                    download.download = string + ".png";
                    copy.onclick = function(event) {
                        if (ClipboardItem.supports("image/png")) {
                            canvas.toBlob((blob) => {
                                if (blob) {
                                    navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
                                } else {
                                    alert("unknown error, try downloading instead");
                                }
                            });
                        } else {
                            alert("cannot copy images");
                        }
                    }
                });
            });
        });
    } else {
        autoResizeCanvas(canvas, preview, chars, border, options);
        clearCanvas(canvas, ctx);
        clearCanvas(preview, pctx);
    }
}

function drawPreview(ctx, preview, canvas) {
    clearCanvas(preview, ctx);
    ctx.drawImage(canvas, 0, 0, preview.width, preview.height);
}

function drawLetters(ctx, letters, border, options) {
    drawImage(ctx, copyrightImage, 0, border.top + border.bottom);
    drawImage(ctx, border.imageLeft, copyrightWidth, 0);
    let x = border.left + copyrightWidth;// + lineWidth;
    let y = border.top;// + lineWidth;
    for (let i = 0; i < letters.length; i++) {
        let w = letters[i].width;
        let outw = options.eqwidth ? letterMaxWidth : w;
        borderFillPainter(ctx, border, x, outw + options.spacing * 2)
        x += options.spacing;
        drawLetter(ctx, letters[i], x + Math.round((outw - w) / 2), y);
        // if (options.isolated) {
        //     ctx.strokeStyle = "#000";
        //     ctx.lineWidth = lineWidth * 2;
        //     ctx.strokeRect(x, y, w, 700);
        // }
        x += outw;
        x += options.spacing;
        if (options.isolated && i + 1 != letters.length) {
            drawImage(ctx, border.imageSep, x, 0);
            x += border.sepWidth;
        }
    }
    drawImage(ctx, border.imageRight, x, 0);
}

function getLettersTotalWidth(letters, options) {
    if (options.eqwidth) {
        return letterMaxWidth * letters.length
    } else {
        let width = 0;
        for (let i = 0; i < letters.length; i++) {
            width += letters[i].width;
        }
        return width
    }
}

function drawLetter(ctx, letter, x, y) {
    [
        letter.image1,
        letter.image2,
        letter.image3,
        letter.image4
    ].map(image => {drawImage(ctx, image, x, y)});
}

function drawImage(ctx, image, dx, dy) {
    if (image !== null) {ctx.drawImage(image, dx, dy)}
}

function clearCanvas(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function borderFillPainter(ctx, border, x, w) {
    if (border.pattern !== null) {
        ctx.fillStyle = border.pattern;
        ctx.fillRect(x, 0, w, border.top + border.bottom + 700);
    }
}