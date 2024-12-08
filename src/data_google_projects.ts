import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleProjectsArgs {
  filter: string;
}

export class data_google_projects extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleProjectsArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_projects", resourceName);
  }

  get filter(): string {
    return `data.${this.resourceType}.${this.resourceName}.filter`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get projects(): string {
    return `data.${this.resourceType}.${this.resourceName}.projects`;
  }
}
