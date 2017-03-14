const Generator = require('yeoman-generator');

class gen extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    initializing() {

        try {
            this.username = process.env.USER || process.env.USERPROFILE.split(require('path').sep)[2];
        } catch (e) {
            this.username = '';
        }
    }

    prompting() {

        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                validate: name => {
                    if (!name) {
                        return 'Project name cannot be empty';
                    }
                    if (!/\w+/.test(name)) {
                        return 'Project name should only consist of 0~9, a~z, A~Z, _, .';
                    }

                    var fs = require('fs');
                    if (!fs.existsSync(this.destinationPath(name))) {
                        return true;
                    }
                    if (require('fs').statSync(this.destinationPath(name)).isDirectory()) {
                        return 'Project already exist';
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'description',
                message: 'Your project description',
                default: ''
            },
            {
                type: 'input',
                name: 'username',
                message: 'Your name',
                default: this.username
            },
            {
                type: 'input',
                name: 'email',
                message: 'Your email',
                default: ''
            },
            {
                type: 'confirm',
                name: 'pushState',
                message: 'Use html5 mode?',
                default: false
            },
            {
                type: 'list',
                name: 'registry',
                message: 'Which registry would you use?',
                choices: [
                    'https://registry.npm.taobao.org',
                    'https://registry.npmjs.org'
                ]
            }
        ])
            .then(answers => {
                this.answers = answers;
                this.obj = {
                    answers: this.answers
                };
            });
    }

    configuring(answers) {
        const path = require('path');
        const fs = require('fs');
        const done = this.async();
        fs.exists(this.destinationPath(this.answers.name), exists => {
            if (exists && fs.statSync(this.destinationPath(this.answers.name)).isDirectory()) {
                this.log.error('Directory [' + this.answers.name + '] exists');
                process.exit(1);
            }
            this.destinationRoot(path.join(this.destinationRoot(), this.answers.name));
            done();
        });
    }

    writing() {
        const _ = require('lodash');

        this.fs.copy(this.templatePath('img', '*'), this.destinationPath('img'));
        this.fs.copyTpl(this.templatePath('ts'), this.destinationPath('ts'), this.obj, {
            interpolate: /<%=([\s\S]+?)%>/g
        });
        this.fs.copyTpl(this.templatePath('index.html'), this.destinationPath('index.html'), this.obj);
        this.fs.copyTpl(this.templatePath('package.json_vm'), this.destinationPath('package.json'), this.obj);
        this.fs.copy(this.templatePath('postcss.config.js'), this.destinationPath('postcss.config.js'));

        this.fs.copy(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'));
        this.fs.copy(this.templatePath('tslint.json'), this.destinationPath('tslint.json'));
        this.fs.copy(this.templatePath('webpack.config.common.js'), this.destinationPath('webpack.config.common.js'));
        this.fs.copy(this.templatePath('webpack.config.js'), this.destinationPath('webpack.config.js'));
        this.fs.copy(this.templatePath('webpack.config.prod.js'), this.destinationPath('webpack.config.prod.js'));
    }


    install() {
        this.npmInstall(undefined, {
            registry: this.answers.registry
        });
    }

    end() {
        this.log.ok(`Project ${this.answers.name} generated!!!`);
    }
}

module.exports = gen;
