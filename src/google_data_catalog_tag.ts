import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogTagArgsFields {
  bool_value?: boolean;
  double_value?: number;
  enum_value?: string;
  field_name: string;
  string_value?: string;
  timestamp_value?: string;
}

export interface GoogleDataCatalogTagArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataCatalogTagArgs {
  column?: string;
  parent?: string;
  template: string;
  fields: GoogleDataCatalogTagArgsFields[];
  timeouts?: GoogleDataCatalogTagArgsTimeouts;
}

export class google_data_catalog_tag extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleDataCatalogTagArgs) {
    const meta = {fields:{isBlock:true},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_tag", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get template(): string {
    return `${this.resourceType}.${this.resourceName}.template`;
  }

  get template_displayname(): string {
    return `${this.resourceType}.${this.resourceName}.template_displayname`;
  }
}
