/*
 * Copyright(c) Oflane Software 2017. All Rights Reserved.
 */
import fata from './fata'
import fataOptions from './fata/options'
import temetas from './temetas'
import fase from 'fansion-base'
import metaDefaultMetaList from './meta/default/meta-list'
import metaDefaultMetaEdit from './meta/default/meta-edit'
import metaDefaultMetaGroupList from './meta/default/meta-group-list'
import metaDefaultMetaGroupEdit from './meta/default/meta-group-edit'
import metaOfentityOfeMetaEdit from './meta/ofentity/ofe-meta-edit'
import metaFacFacMetaEdit from './meta/fac/fac-meta-edit'

/**
 * 安装方法
 * @param Vue vue对象
 * @param opts 选项
 */
const install = function (Vue, opts = {}) {
  // 页面注册
  let pages = {
    '/meta/default/meta-list/:type': metaDefaultMetaList,
    '/meta/default/meta-edit/:type/:id': metaDefaultMetaEdit,
    '/meta/default/meta-group-list/:type': metaDefaultMetaGroupList,
    '/meta/default/meta-group-edit/:type/:group': metaDefaultMetaGroupEdit,
    '/meta/ofentity/ofe-meta-edit/:type/:group': metaOfentityOfeMetaEdit,
    '/meta/fac/fac-meta-edit/:id': metaFacFacMetaEdit
  }
  fase.init({pages: {pages}, routes: !opts.disableRoute ? Object.keys(pages) : null})
  fata.addFormControls(fataOptions.formControls)
  fata.addConfeta(fataOptions.confetas)
  init(opts)
}
/**
 * 初始化方法
 * @param opts
 */
const init = (opts = {}) => {
  opts.temeta && temetas.addTemeta(opts.temeta)
  opts.fata && fata.addConfeta(opts.fata)
  opts.formor && fata.addFormControls(opts.fata)
}
/**
 * fac组件模块
 * @author Paul.Yang E-mail:yaboocn@qq.com
 * @version 1.0 2017-8-15
 */
export default {
  fata,
  temetas,
  install
}