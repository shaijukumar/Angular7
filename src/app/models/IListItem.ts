export  class IListItem {
    [key: string]: any;
    id: string;
    title: string;
    modified: Date;
    created: Date;
    modifiedby: string;
    createdby: string;
}