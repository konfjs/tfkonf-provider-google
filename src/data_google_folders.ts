import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleFoldersArgs {
  parent_id: string;
}

export class data_google_folders extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleFoldersArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_folders", resourceName);
  }

  get folders(): string {
    return `data.${this.resourceType}.${this.resourceName}.folders`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get parent_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.parent_id`;
  }
}
