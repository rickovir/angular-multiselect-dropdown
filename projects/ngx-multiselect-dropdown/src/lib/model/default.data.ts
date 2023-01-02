import { ListItem } from "./list-item.model";
import { Settings } from "./setting.model";

export const defaultSetting: Settings = {
    singleSelection: false,
    defaultOpen: false,
    idField: 'id',
    textField: 'name',
    disabledField: 'isDisabled',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableCheckAll: false,
    itemsShowLimit: 999999999999,
    selectLimit: 0,
    selectedItemShowLimit: 3,
    allowSearchFilter: false
};

export const sampleData: ListItem[] = [
    { id: 1, text: 'List 1', isDisabled: false },
    { id: 2, text: 'List 2', isDisabled: false },
    { id: 3, text: 'List 3', isDisabled: false },
    { id: 3, text: 'List 4', isDisabled: false },
    { id: 3, text: 'List 5', isDisabled: false },
    { id: 3, text: 'List 6', isDisabled: false },
];
