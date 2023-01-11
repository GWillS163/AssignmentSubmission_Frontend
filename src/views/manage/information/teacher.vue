<template>
<div class="container-fluid">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-md-6">
                            <h3 class="text-dark mb-4">教师管理</h3>
                        </div>
                        <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;"><a class="btn btn-primary" role="button"><i class="fa fa-plus"></i>&nbsp;Agregar colaborador</a></div>
                    </div>
                    <div class="col">
                        <div class="card" id="TableSorterCard">
                            <div class="row">
                                <div class="col">
                                    <div class="card" id="TableSorterCard-1">
                                        <div class="card-header py-3">
                                            <div class="row table-topper align-items-center">
                                                <div class="col-12 col-sm-5 col-md-6 text-start" style="margin: 0px;padding: 5px 15px;">
                                                    <p class="text-primary m-0 fw-bold">教师信息管理</p>
                                                </div>
                                                <div class="col-12 col-sm-7 col-md-6 text-end" style="margin: 0px;padding: 5px 15px;"><button class="btn btn-primary btn-sm reset" type="button" style="margin: 2px;">Borrar Filtros</button><button class="btn btn-warning btn-sm" id="zoom_in-1" type="button" zoomclick="ChangeZoomLevel(-10);" style="margin: 2px;"><i class="fa fa-search-plus"></i></button><button class="btn btn-warning btn-sm" id="zoom_out-1" type="button" zoomclick="ChangeZoomLevel(-10);" style="margin: 2px;"><i class="fa fa-search-minus"></i></button></div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <div class="table-responsive">
                                                    <table class="table table-striped table tablesorter" id="ipi-table">
                                                        <thead class="thead-dark">
                                                            <tr>
                                                                <th class="text-center" style="width: 124px;">姓名</th>
                                                                <th class="text-center">工号</th>
                                                                <th class="text-center" style="width: 101.5px;">班级(多选fk)</th>
                                                                <th>qq</th>
                                                                <th>mail</th>
                                                                <th>电话</th>
                                                                <th style="width: 192.226px;">最近登陆</th>
                                                                <th>注册时间</th>
                                                                <th class="text-center filter-false sorter-false">操作</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody class="text-center">
                                                            <tr>
                                                                <td style="width: 168.7344px;">孟老师</td>
                                                                <td>19852331</td>
                                                                <td style="width: 119.6953px;">1909班</td>
                                                                <td>1274667113</td>
                                                                <td style="width: 118.484px;">gwills@qq.com</td>
                                                                <td>18801002716</td>
                                                                <td>2022-7-15 10:13:43</td>
                                                                <td style="width: 333.7656px;">2022-7-15 10:14:53</td>
                                                                <td class="text-center align-middle" style="max-height: 60px;height: 60px;width: 748.25px;"><a class="btn btnMaterial btn-flat primary semicircle" role="button" href="#"><i class="far fa-eye"></i></a><a class="btn btnMaterial btn-flat success semicircle" role="button" href="#"><i class="fas fa-pen"></i></a><a class="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" role="button" style="margin-left: 5px;" data-bs-toggle="modal" data-bs-target="#delete-modal" href="#"><i class="fas fa-trash btnNoBorders" style="color: #DC3545;"></i></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>赵老师</td>
                                                                <td>19852333</td>
                                                                <td>1909班</td>
                                                                <td>280324329</td>
                                                                <td>19852331@czjtu.edu.cn</td>
                                                                <td>19901002839</td>
                                                                <td>2022-7-15 10:15:58</td>
                                                                <td>2022-7-15 10:16:00</td>
                                                                <td class="text-center align-middle" style="max-height: 60px;height: 60px;"><a class="btn btnMaterial btn-flat primary semicircle" role="button" href="#"><i class="far fa-eye"></i></a><a class="btn btnMaterial btn-flat success semicircle" role="button" href="#"><i class="fas fa-pen"></i></a><a class="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" role="button" style="margin-left: 5px;" data-bs-toggle="modal" data-bs-target="#delete-modal" href="#"><i class="fas fa-trash btnNoBorders" style="color: #DC3545;"></i></a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
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
  name: "teacher"
}
</script>

<style scoped>

</style>