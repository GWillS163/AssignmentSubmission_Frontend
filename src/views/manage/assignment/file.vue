<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-sm-6 col-md-6">
        <h3 class="text-dark mb-4">我收集的文件</h3>
      </div>
      <div class="col-12 col-sm-6 col-md-6 text-end" style="margin-bottom: 30px;"><a class="btn btn-primary"
                                                                                     role="button"><i
          class="fa fa-plus"></i>&nbsp;Agregar colaborador</a></div>
    </div>
    <div class="col">
      <div id="TableSorterCard" class="card">
        <div class="card-header py-3">
          <div class="row table-topper align-items-center">
            <div class="col-12 col-sm-5 col-md-6 text-start" style="margin: 0px;padding: 5px 15px;">
              <p class="text-primary m-0 fw-bold">Colaboradores</p>
            </div>
            <div class="col-12 col-sm-7 col-md-6 text-end" style="margin: 0px;padding: 5px 15px;">
              <button class="btn btn-primary btn-sm reset" style="margin: 2px;" type="button">Borrar Filtros</button>
<!--              <button id="zoom_in" class="btn btn-warning btn-sm" style="margin: 2px;" type="button"-->
<!--                      zoomclick="ChangeZoomLevel(-10);"><i class="fa fa-search-plus"></i></button>-->
<!--              <button id="zoom_out" class="btn btn-warning btn-sm" style="margin: 2px;" type="button"-->
<!--                      zoomclick="ChangeZoomLevel(-10);"><i class="fa fa-search-minus"></i></button>-->
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="table-responsive">
              <table id="ipi-table" class="table table-striped table tablesorter">
                <thead class="thead-dark">
                <tr>
                  <th class="text-center">姓名</th>
                  <th class="text-center">Puesto</th>
                  <th class="text-center">Departamento</th>
                  <th class="text-center filter-false sorter-false">Acciones</th>
                </tr>
                </thead>
                <tbody class="text-center">
                <tr>
                  <td>Ana</td>
                  <td>Diseñador</td>
                  <td>Diseño</td>
                  <td class="text-center align-middle" style="max-height: 60px;height: 60px;"><a
                      class="btn btnMaterial btn-flat primary semicircle" href="#" role="button"><i
                      class="far fa-eye"></i></a><a class="btn btnMaterial btn-flat success semicircle" href="#"
                                                    role="button"><i class="fas fa-pen"></i></a><a
                      class="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" data-bs-target="#delete-modal"
                      data-bs-toggle="modal" href="#" role="button" style="margin-left: 5px;"><i
                      class="fas fa-trash btnNoBorders" style="color: #DC3545;"></i></a></td>
                </tr>
                <tr>
                  <td>Fer<br></td>
                  <td>Desarrollador</td>
                  <td>Development</td>
                  <td class="text-center align-middle" style="max-height: 60px;height: 60px;"><a
                      class="btn btnMaterial btn-flat primary semicircle" href="#" role="button"><i
                      class="far fa-eye"></i></a><a class="btn btnMaterial btn-flat success semicircle" href="#"
                                                    role="button"><i class="fas fa-pen"></i></a><a
                      class="btn btnMaterial btn-flat accent btnNoBorders checkboxHover" data-bs-target="#delete-modal"
                      data-bs-toggle="modal" href="#" role="button" style="margin-left: 5px;"><i
                      class="fas fa-trash btnNoBorders" style="color: #DC3545;"></i></a></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "file"
}
</script>

<style scoped>

</style>