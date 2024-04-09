<template>
    <a-form-model class="login-container" ref="loginForm" :model="loginForm" :rules="rules" v-bind="layout">
        <a-form-model-item has-feedback label="邮箱" prop="email">
            <a-input v-model="loginForm.email" />
        </a-form-model-item>
        <a-form-model-item has-feedback label="密码" prop="password">
            <a-input v-model="loginForm.password" type="password" autocomplete="off" />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
            <a-button type="primary" @click="submitForm('loginForm')">
                提交
            </a-button>
            <a-button style="margin-left: 10px" @click="resetForm('loginForm')">
                重置
            </a-button>
        </a-form-model-item>
    </a-form-model>
</template>
<script>
import { loginUser } from '@/api/user.js'
export default {
    data() {
        const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/
        let checkEmail = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('请填写邮箱'));
            } else {
                if (regEmail.test(value)) {
                    return callback()
                } else {
                    return callback(new Error('邮箱格式不正确'));
                }
            }
        };
        let validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
                callback();
            }
        };

        return {
            loginForm: {
                password: '',
                email: '',
            },
            rules: {
                pass: [{ validator: validatePass, trigger: 'change' }],
                email: [{ validator: checkEmail, trigger: 'change' }],
            },
            layout: {
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            },
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    this.loginUserApi()
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        loginUserApi() {
            loginUser(this.loginForm)
            .then((res) => { 
                this.$store.dispatch('setUserInfo',res)
                this.$router.push({name:'home'})
             })
            .catch((err) => {
                console.log(err)
                this.$message.error(err)
            })
        }
    },

};
</script>

<style lang="less" scoped>
.login-container {
    width: 500px;
    border: 2px solid #eee;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
    border-radius: 20px;

}
</style>