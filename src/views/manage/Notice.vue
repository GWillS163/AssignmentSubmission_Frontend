<template>

  <div class="row">
    <div class="col">
      <h3 class="text-dark mb-1">消息中心</h3>
    </div>
    <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;">
      <a class="btn btn-primary"
         role="button"><i
          class="fa fa-plus"></i>&nbsp;广播消息</a></div>
  </div>
  <div class="card shadow">
    <div
        class="card-header d-flex flex-wrap justify-content-center align-items-center justify-content-sm-between gap-3">
      <div class="row flex-fill">
        <div class="col-md-6">
          <h5 class="display-6 text-nowrap text-capitalize mb-0"> </h5>
        </div>
        <div class="col-md-6">
          <div class="input-group input-group-sm w-auto"><input class="form-control form-control-sm"
                                                                placeholder="请输入关键字"
                                                                type="text">
            <button class="btn btn-outline-primary btn-sm" type="button">
              <svg class="bi bi-search mb-1" fill="currentColor" height="1em" viewBox="0 0 16 16" width="1em"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
          <tr>
            <th>已读</th>
            <th>来自</th>
            <th>备注</th>
            <th>内容</th>
            <th style="width: 151.398px;">时间</th>
            <th class="text-center">详情</th>
          </tr>
          </thead>
          <tbody>
<!--          <tr v-for="notice in notices">-->
<!--            <td><input type="checkbox" :checked="handleCheck()"></td>-->
<!--            <td class="text-truncate" style="max-width: 200px;">{{ notice.from }}</td>-->
<!--            <td>{{ notice.type }}</td>-->
<!--            <td class="text-truncate" style="max-width: 200px;">{{ notice.content }}</td>-->
<!--            <td>{{ notice.sendTime }}</td>-->
<!--            <td class="text-center">-->
<!--&lt;!&ndash;              add a eye icon &ndash;&gt;-->
<!--&lt;!&ndash;              <a class="btn btn-primary btn-sm" role="button" @click="handleDetail(notice)"><i class="fa fa-eye"></i></a>&ndash;&gt;-->
<!--&lt;!&ndash;              <svg class="bi bi-eye-fill fs-5 text-primary" fill="currentColor" height="1em" viewBox="0 0 16 16"&ndash;&gt;-->
<!--&lt;!&ndash;                   width="1em"&ndash;&gt;-->
<!--&lt;!&ndash;                   xmlns="http://www.w3.org/2000/svg">&ndash;&gt;-->
<!--&lt;!&ndash;                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>&ndash;&gt;-->
<!--&lt;!&ndash;                <path&ndash;&gt;-->
<!--&lt;!&ndash;                    d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>&ndash;&gt;-->
<!--&lt;!&ndash;              </svg>&ndash;&gt;-->
<!--            </td>-->
<!--          </tr>-->
          <tr>
            <td><input type="checkbox"></td>
            <td class="text-truncate" style="max-width: 200px;">张夜光</td>
            <td>自动提醒</td>
            <td class="text-truncate" style="max-width: 200px;">安卓作业即将截止，请注意</td>
            <td>2022-12-17 20:16:38</td>
            <td class="text-center">
              <svg class="bi bi-eye-fill fs-5 text-primary" fill="currentColor" height="1em" viewBox="0 0 16 16"
                   width="1em"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
                <path
                    d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
              </svg>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td class="text-truncate" style="max-width: 200px;">KissesJun</td>
            <td>自动提醒</td>
            <td class="text-truncate" style="max-width: 200px;">大数据作业即将截止，请注意</td>
            <td>2022-12-17 20:16:38</td>
            <td class="text-center">
              <svg class="bi bi-eye-fill fs-5 text-primary" fill="currentColor" height="1em" viewBox="0 0 16 16"
                   width="1em"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
                <path
                    d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
              </svg>
            </td>
          </tr>
          <tr>
            <td><input type="checkbox"></td>
            <td class="text-truncate" style="max-width: 200px;">KissesJun</td>
            <td>自动提醒</td>
            <td class="text-truncate" style="max-width: 200px;">大数据作业即将截止，请注意</td>
            <td>2022-12-17 20:16:38</td>
            <td class="text-center">
              <svg class="bi bi-eye-fill fs-5 text-primary" fill="currentColor" height="1em" viewBox="0 0 16 16"
                   width="1em"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
                <path
                    d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
              </svg>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card-footer">
      <nav>
        <ul class="pagination pagination-sm mb-0 justify-content-center">
          <li class="page-item"><a aria-label="Previous" class="page-link" href="#"><span
              aria-hidden="true">«</span></a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a aria-label="Next" class="page-link" href="#"><span aria-hidden="true">»</span></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "notice",
}
</script>

<style scoped>

</style>