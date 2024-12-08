import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDataCatalogEntryGroupArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDataCatalogEntryGroupArgs {
  description?: string;
  display_name?: string;
  entry_group_id: string;
  timeouts?: GoogleDataCatalogEntryGroupArgsTimeouts;
}

export class google_data_catalog_entry_group extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDataCatalogEntryGroupArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_data_catalog_entry_group", resourceName);
  }

  get entry_group_id(): string {
    return `${this.resourceType}.${this.resourceName}.entry_group_id`;
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
}
