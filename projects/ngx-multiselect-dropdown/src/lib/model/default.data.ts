import { Settings } from "./setting.model";

export const defaultSetting: Settings = {
    singleSelection: false,
    defaultOpen: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableCheckAll: false,
    itemsShowLimit: 999999999999,
    allowSearchFilter: false
};
