<template>
<div class="container">
    <div class="card shadow-lg o-hidden border-0 my-5">
        <div class="card-body p-0">
            <div class="row">
                <div class="col-lg-5 d-none d-lg-flex">
                    <div class="flex-grow-1 bg-register-image"
                         style="background-image: url(&quot;../assets/img/dogs/image2.jpeg&quot;);"></div>
                </div>
                <div class="col-lg-7">
                    <div class="p-5">
                        <div class="text-center">
                            <h4 class="text-dark mb-4">创建账户</h4>
                        </div>
                        <form class="user">
                            <div class="row mb-3">
                                <div class="col-sm-6 mb-3 mb-sm-0"><input class="form-control form-control-user"
                                                                          type="text" id="exampleFirstName"
                                                                          placeholder="姓名" name="name"></div>
                                <div class="col-sm-6"><input class="form-control form-control-user" type="text"
                                                             id="exampleFirstName" placeholder="ID/学号/工号" name="id">
                                </div>
                            </div>
                            <div class="mb-3"><input class="form-control form-control-user" type="email"
                                                     id="exampleInputEmail" aria-describedby="emailHelp"
                                                     placeholder="邮箱地址" name="email"></div>
                            <div class="row mb-3">
                                <div class="col-sm-6 mb-3 mb-sm-0"><input class="form-control form-control-user"
                                                                          type="password" id="examplePasswordInput"
                                                                          placeholder="密码" name="password"></div>
                                <div class="col-sm-6"><input class="form-control form-control-user" type="password"
                                                             id="exampleRepeatPasswordInput" placeholder="确认密码"
                                                             name="password_repeat"></div>
                            </div>
                            <button class="btn btn-primary d-block btn-user w-100" type="submit">注册</button>
                            <hr>
                            <div class="text-center justify-content-between"><a class="small"
                                                                                href="forgot-password.html">忘记密码？</a><a
                                    class="small ms-lg-4" href="login.html">已有账户？请登录</a></div>
                            <hr>
                        </form>
                        <div class="text-center"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "register"
}
</script>

<style scoped>

</style>