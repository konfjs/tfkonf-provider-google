import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogTagTemplateArgsFieldsTypeEnumTypeAllowedValues {
  display_name: string;
}

export interface GoogleDataCatalogTagTemplateArgsFieldsTypeEnumType {
  allowed_values: GoogleDataCatalogTagTemplateArgsFieldsTypeEnumTypeAllowedValues[];
}

export interface GoogleDataCatalogTagTemplateArgsFieldsType {
  enum_type?: GoogleDataCatalogTagTemplateArgsFieldsTypeEnumType;
}

export interface GoogleDataCatalogTagTemplateArgsFields {
  field_id: string;
  type: GoogleDataCatalogTagTemplateArgsFieldsType;
}

export interface GoogleDataCatalogTagTemplateArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataCatalogTagTemplateArgs {
  display_name?: string;
  force_delete?: boolean;
  tag_template_id: string;
  fields: GoogleDataCatalogTagTemplateArgsFields[];
  timeouts?: GoogleDataCatalogTagTemplateArgsTimeouts;
}

export class google_data_catalog_tag_template extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataCatalogTagTemplateArgs) {
    const meta = {fields:{isBlock:true,type:{isBlock:true,enum_type:{isBlock:true,allowed_values:{isBlock:true}}}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_tag_template", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get region(): string {
    return `${this.resourceType}.${this.resourceName}.region`;
  }

  get tag_template_id(): string {
    return `${this.resourceType}.${this.resourceName}.tag_template_id`;
  }
}
