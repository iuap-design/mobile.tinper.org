const path = require('path');
const fs = require('fs-extra');
const componentsPath = path.join(__dirname, `./src/`);
const demoJsReg = /Demo[\w\W]+\.js/;
const demoLessReg = /Demo[\w\W]+\.less/;



let components = fs.readdirSync(componentsPath);
components.forEach(component=>{
    let template = fs.readFileSync(path.join(__dirname, `./indexTemplate.js`),'utf-8');
    let demoJs = [];
    let demoLess = [];
    let demoJsDom = [];
    if(fs.existsSync(componentsPath+`${component}/demo`)){
        let demos = fs.readdirSync(componentsPath+`${component}/demo`);
        demos.forEach(it=>{
            if(demoJsReg.test(it)){
                demoJs.push(`import ${it.replace('.js','')} from './demo/${it}'`);
                let code = fs.readFileSync(componentsPath+`${component}/demo/${it}`,'utf-8');//代码
                let title = code.match(/@title(.{0,})/)?code.match(/@title(.{0,})/)[1]:'';//标题
                demoJsDom.push("<div className='demo-item'><div className='demo-item-title'>"+title+"</div><"+it.replace('.js','')+"/></div>")
            }
            if(demoLessReg.test(it))demoLess.push(`import './demo/${it}'`);
        })
        template=template.replace('importDemoJs',demoJs.join('\n')).replace('importDemoless',demoLess.join('\n')).replace('importDemoJsDom',demoJsDom.join('\n'));
        fs.writeFileSync(componentsPath+`${component}/index.js`,template)
        console.log(`✌️ 😀 ✌️ ${component} index.js 文件生成成功`)
    }
})