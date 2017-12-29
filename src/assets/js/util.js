/**
 * 比较两个数大小(用于数组对象属性值对比)
 * @params order,排序. asc,升序;!asc,降序.
 *         ...propertyName, 需要累乘,加,减,除之后的数组或者单个数字.(暂时封装累乘)
 * @return 两个值相减之后的结果
 */
export function hCompare (order, ...propertyName) {
  return (obj1, obj2) => {
    let val1 = obj1[propertyName[0]]
    let val2 = obj2[propertyName[0]]
    if (propertyName.length >= 2) {
      val1 = propertyName.reduce((total, current) => {
        return obj1[total] * obj1[current]
      })
      val2 = propertyName.reduce((total, current) => {
        return obj2[total] * obj2[current]
      })
    }
    return order === 'asc' ? (val1 - val2) : (val2 - val1)
  }
}

/**
 * 数组对象属性值排序
 * @params obj,数组对象
 *         order,排序
 *         ...propertyName, 属性值
 * @return 无返回, obj是引用形值
 */
export function hPropertyNameSort (obj, order, ...propertyName) {
  obj.sort(hCompare(order, ...propertyName))
}
