import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleActiveFolderArgs {
  api_method?: string;
  display_name: string;
  parent: string;
}

export class data_google_active_folder extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleActiveFolderArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_active_folder", resourceName);
  }

  get display_name(): string {
    return `data.${this.resourceType}.${this.resourceName}.display_name`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get parent(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent`;
  }
}
