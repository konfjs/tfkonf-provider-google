import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleFolderArgs {
  folder: string;
  lookup_organization?: boolean;
}

export class data_google_folder extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleFolderArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_folder", resourceName);
  }

  get create_time(): string {
    return `data.${this.resourceType}.${this.resourceName}.create_time`;
  }

  get deletion_protection(): string {
    return `data.${this.resourceType}.${this.resourceName}.deletion_protection`;
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get folder(): string {
    return `data.${this.resourceType}.${this.resourceName}.folder`;
  }

  get folder_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.folder_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get lifecycle_state(): string {
    return `data.${this.resourceType}.${this.resourceName}.lifecycle_state`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get organization(): string {
    return `data.${this.resourceType}.${this.resourceName}.organization`;
  }

  get parent(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent`;
  }
}
