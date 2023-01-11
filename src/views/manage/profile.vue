<template>
  <div class="container-fluid">
    <h3 class="text-dark mb-4">个人信息管理</h3>
    <div class="row mb-3">
      <div class="col-lg-4">
        <div class="card mb-3">
          <div class="card-body text-center shadow">
            <div class="row">
              <div class="col"><img class="rounded-circle mb-3 mt-4" height="160"
                                    src="../../../backendAssets/img/AssginImg.png" width="160">
                <div class="mb-3">
                  <button class="btn btn-primary btn-sm" type="button">更改头像</button>
                </div>
              </div>
              <div class="col my-auto">
                <div class="table-responsive">
                  <table class="table table-borderless">
                    <tbody>
                    <tr>
                      <td>注册时间</td>
                      <td>2022-12-17</td>
                    </tr>
                    <tr>
                      <td>上交作业</td>
                      <td>43</td>
                    </tr>
                    <tr>
                      <td>上次登录</td>
                      <td>2022-12-17</td>
                    </tr>
                    <tr>
                      <td>登录IP</td>
                      <td>10.34.213.87</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card shadow mb-4">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h6 class="text-primary fw-bold m-0"><strong>作业上交统计</strong><br></h6>
            <div class="dropdown no-arrow">
              <button aria-expanded="false" class="btn btn-link btn-sm dropdown-toggle" data-bs-toggle="dropdown"
                      type="button"><i class="fas fa-ellipsis-v text-gray-400"></i></button>
              <div class="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                <p class="text-center dropdown-header">dropdown header:</p><a class="dropdown-item" href="#">&nbsp;Action</a><a
                  class="dropdown-item" href="#">&nbsp;Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">&nbsp;Something else here</a>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="chart-area">
              <canvas
                  data-bss-chart="{&quot;type&quot;:&quot;doughnut&quot;,&quot;data&quot;:{&quot;labels&quot;:[&quot;Direct&quot;,&quot;Social&quot;,&quot;Referral&quot;],&quot;datasets&quot;:[{&quot;label&quot;:&quot;&quot;,&quot;backgroundColor&quot;:[&quot;#4e73df&quot;,&quot;#1cc88a&quot;,&quot;#36b9cc&quot;],&quot;borderColor&quot;:[&quot;#ffffff&quot;,&quot;#ffffff&quot;,&quot;#ffffff&quot;],&quot;data&quot;:[&quot;50&quot;,&quot;30&quot;,&quot;15&quot;]}]},&quot;options&quot;:{&quot;maintainAspectRatio&quot;:false,&quot;legend&quot;:{&quot;display&quot;:false,&quot;labels&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}},&quot;title&quot;:{&quot;fontStyle&quot;:&quot;normal&quot;}}}"></canvas>
            </div>
            <div class="text-center small mt-4"><span class="me-2"><i class="fas fa-circle text-primary"></i>&nbsp;按时上交</span><span
                class="me-2"><i class="fas fa-circle text-success"></i>暂未提交</span><span class="me-2"><i
                class="fas fa-circle text-info"></i>&nbsp;错过提交</span></div>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="row mb-3 d-none">
          <div class="col">
            <div class="card text-white bg-primary shadow">
              <div class="card-body">
                <div class="row mb-2">
                  <div class="col">
                    <p class="m-0">Peformance</p>
                    <p class="m-0"><strong>65.2%</strong></p>
                  </div>
                  <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>
                </div>
                <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card text-white bg-success shadow">
              <div class="card-body">
                <div class="row mb-2">
                  <div class="col">
                    <p class="m-0">Peformance</p>
                    <p class="m-0"><strong>65.2%</strong></p>
                  </div>
                  <div class="col-auto"><i class="fas fa-rocket fa-2x"></i></div>
                </div>
                <p class="text-white-50 small m-0"><i class="fas fa-arrow-up"></i>&nbsp;5% since last month</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card shadow mb-3">
              <div class="card-header py-3">
                <p class="text-primary m-0 fw-bold">基础信息</p>
              </div>
              <div class="card-body">
                <form>
                  <div class="row">
                    <div class="col">
                      <div class="mb-3"><label class="form-label" for="username"><strong>姓名</strong><br></label><input
                          id="username" class="form-control" name="username" placeholder="请输入 姓名" type="text">
                      </div>
                    </div>
                    <div class="col">
                      <div class="mb-3"><label class="form-label" for="email"><strong>邮箱地址</strong></label><input
                          id="email" class="form-control" name="email" placeholder="user@example.com" type="email">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col">
                      <div class="mb-3"><label class="form-label" for="first_name"><strong>ID</strong></label><input
                          id="first_name-2" class="form-control" name="first_name" placeholder="请输入 学号/工号"
                          type="text"></div>
                      <button class="btn btn-primary" type="submit">保存</button>
                    </div>
                    <div class="col">
                      <div class="mb-3"><label class="form-label" for="first_name"><strong>密码</strong></label><input
                          class="form-control" name="password" type="password" value="1234qwer"></div>
                      <button class="btn btn-primary" type="submit">修改密码</button>
                    </div>
                  </div>
                  <div class="mb-3"></div>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="card shadow">
                  <div class="card-header py-3">
                    <p class="text-primary m-0 fw-bold">作业进度通知设定</p>
                  </div>
                  <div class="card-body">
                    <form class="ps-xl-3 pe-xl-3">
                      <div class="mb-3"></div>
                      <div class="form-check form-switch form-check-reverse text-start pe-xl-0 mb-xl-3"><input
                          id="formCheck-2" checked="" class="form-check-input pt-xl-0 mt-xl-1 me-xl-3"
                          disabled="" style="width: 49px;height: 24px;" type="checkbox"><label class="form-check-label"
                                                                                          for="formCheck-2"
                                                                                          style="font-size: 18px;">本站站内通知<strong>&nbsp;</strong><i
                          class="fas fa-question-circle ms-xxl-2"></i><br></label></div>
                      <div class="form-check form-switch form-check-reverse text-start pe-xl-0 mb-xl-3"><input
                          id="formCheck-8" class="form-check-input pt-xl-0 mt-xl-1 me-xl-3" style="width: 49px;height: 24px;"
                          type="checkbox"><label class="form-check-label" for="formCheck-8"
                                                                   style="font-size: 18px;">接收邮箱通知&nbsp;<i
                          class="fas fa-question-circle ms-xxl-2"></i><br></label></div>
                      <div class="form-check form-switch form-check-reverse text-start pe-xl-0 mb-xl-3"><input
                          id="formCheck-3" class="form-check-input pt-xl-0 mt-xl-1 me-xl-3" style="width: 49px;height: 24px;"
                          type="checkbox"><label class="form-check-label" for="formCheck-3"
                                                                   style="font-size: 18px;">接收RSS订阅&nbsp;<i
                          class="fas fa-question-circle ms-xxl-2"></i><br></label></div>
                      <div class="mb-3">
                        <button class="btn btn-primary" type="submit">保存</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card shadow">
                  <div class="card-header py-3">
                    <p class="text-primary m-0 fw-bold">可选信息</p>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="mb-3"></div>
                      <div class="mb-3"></div>
                      <div class="mb-3"><label class="form-label" for="country"><strong>班级</strong></label><input
                          id="country-1" class="form-control" name="country" placeholder="如：1909班" type="text"></div>
                      <div class="mb-3"><label class="form-label"
                                               for="country"><strong>手机号</strong><br></label><input
                          id="country-2" class="form-control" name="country" placeholder="请输入手机号" type="text">
                      </div>
                      <div class="mb-3">
                        <button class="btn btn-primary" type="submit">保存</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card shadow mb-5">
      <div class="card-header py-3">
        <p class="text-primary m-0 fw-bold">站内留言</p>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-md-6 col-xl-12">
            <form>
              <div class="mb-3"><label class="form-label"
                                       for="signature"><strong>留下你的想法</strong><br></label><textarea
                  id="signature" class="form-control" name="signature" rows="4"></textarea></div>
              <div class="mb-3">
                <div class="form-check form-switch"><input id="formCheck-1" class="form-check-input"
                                                           type="checkbox"><label class="form-check-label"
                                                                                   for="formCheck-1"><strong>当有回复时通知我</strong><br></label>
                </div>
              </div>
              <div class="mb-3">
                <button class="btn btn-primary" type="submit">保存</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile"
}
</script>

<style scoped>

</style>