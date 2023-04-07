<template>
  <div style="height: 1000px;">
    <div class="container mt-md-5">
      <div class="row">
        <div class="col-md-6 col-xl-6">
          <div class="d-flex float-none dashed_upload">
            <picture><img src="" style="width: 100%;" alt="222"></picture>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="col">
              <h1>健康码调色盘</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3"><label class="col-form-label">健康码选择：</label></div>
            <div class="col">
              <div class="dropdown">
                <button aria-expanded="false" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown"
                        type="button">选择您的版本&nbsp;
                </button>
                <div class="dropdown-menu"><a class="dropdown-item" href="#">北京健康宝</a><a class="dropdown-item"
                                                                                              href="#">上海随申码</a><a
                    class="dropdown-item" href="#">广东粤康码</a><a class="dropdown-item" href="#">江苏苏康码</a><a
                    class="dropdown-item" href="#">四川天府健康通</a><span class="dropdown-item-text">湖南健康码</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3"><label class="col-form-label">颜色选择：</label></div>
            <div class="col m-auto"><input type="color"></div>
          </div>
          <div class="row">
            <div class="col-xl-3"><label class="col-form-label">头像上传：</label></div>
            <div class="col m-auto"><input type="file"></div>
          </div>
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col d-flex float-start justify-content-xl-center mt-md-5">
                  <div class="btn-group float-start" role="group">
                    <button class="btn btn-primary" type="button">Reset</button>
                    <button class="btn btn-primary" style="background: rgb(83,154,255);color: rgb(255,255,255);"
                            type="button">Generate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tab5Content"
}
</script>

<style scoped>

</style>