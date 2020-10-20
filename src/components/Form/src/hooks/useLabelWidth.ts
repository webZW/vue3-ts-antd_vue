import type { Ref } from 'vue';
import type { FormProps, FormSchema } from '../types/form';

import { computed, unref } from 'vue';
import { isNumber } from '/@/utils/is';

// export function useGlobalLabelWidth(propsRef: ComputedRef<FormProps>) {
//   return computed(() => {
//     const { labelWidth, labelCol, wrapperCol } = unref(propsRef);
//     if (!labelWidth) {
//       return { labelCol, wrapperCol };
//     }

//     const width = isNumber(labelWidth) ? `${labelWidth}px` : labelWidth;
//     return {
//       labelCol: { style: { width }, span: 1, ...labelCol },
//       wrapperCol: { style: { width: `calc(100% - ${width})` }, span: 23, ...wrapperCol },
//     };
//   });
// }

export function useItemLabelWidth(schemaItemRef: Ref<FormSchema>, propsRef: Ref<FormProps>) {
  return computed((): any => {
    const schemaItem = unref(schemaItemRef);
    const { labelCol = {}, wrapperCol = {} } = schemaItem.itemProps || {};
    const { labelWidth, disabledLabelWidth } = schemaItem;

    const { labelWidth: globalLabelWidth } = unref(propsRef) as any;
    // 如果全局有设置labelWidth, 则所有item使用
    if ((!globalLabelWidth && !labelWidth) || disabledLabelWidth) {
      return { labelCol, wrapperCol };
    }
    let width = labelWidth || globalLabelWidth;

    if (width) {
      width = isNumber(width) ? `${width}px` : width;
    }
    return {
      labelCol: { style: { width }, span: 1, ...labelCol },
      wrapperCol: { style: { width: `calc(100% - ${width})` }, span: 23, ...wrapperCol },
    };
  });
}
