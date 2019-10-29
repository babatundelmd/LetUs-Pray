const colorArray = ['#FF355E', '#FD5B78', '#FF6037', '#FF9966', '#FF9933', '#FFCC33', '#FFFF66', '#CCFF00', '#66FF66',
    '#AAF0D1', '#50BFE6', '#FF6EFF', '#EE34D2', '#FF00CC'];
const app = document.querySelector('#app');

app.addEventListener('click', (e) => {
    e.preventDefault();
    document.body.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    findColor();
})



const colorArrayLib = {
    radicalRed: { Name: 'Radical Red', Hex: '#FF355E', darkHex: '#b00b2c' },
    wildWaterMelon: { Name: 'Wild Water Melon', Hex: '#FD5B78', darkHex: '' },
    outrageousOrange: { Name: 'Outrageous Orange', Hex: '#FF6037', darkHex: '' },
    atomicTangerine: { Name: 'Atomic Tangerine', Hex: '#FF9966', darkHex: '' },
    neonCarrot: { Name: 'Neon Carrot', Hex: '#FF9933', darkHex: '' },
    sunGlow: { Name: 'Sunglow', Hex: '#FFCC33', darkHex: '' },
    laserLemon: { Name: 'Laser Lemon', Hex: '#FF9933', darkHex: '' },
    electricLime: { Name: 'Electric Lime', Hex: '#CCFF00', darkHex: '' },
    screaminGreen: { Name: 'Screami Green', Hex: '#66FF66', darkHex: '' },
    magicMint: { Name: 'Magic Mint', Hex: '#AAF0D1', darkHex: '' },
    blizzardBlue: { Name: 'Blizzard Blue', Hex: '#50BFE6', darkHex: '' },
    shockingPink: { Name: 'Shocking Pink', Hex: '#FF6EFF', darkHex: '' },
    razzleDazzleRose: { Name: 'Razzle Dazzle Rose', Hex: '#EE34D2', darkHex: '' },
    hotMagenta: { Name: 'Hot Magenta', Hex: '#FF00CC', darkHex: '' },
};


console.log({ colorArrayLib })

const findColor = () => {
    for (colorName in colorArrayLib) {
        return console.log(colorArrayLib[colorName])
    }
}

