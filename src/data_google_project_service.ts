import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleProjectServiceArgs {
  project?: string;
  service: string;
}

export class data_google_project_service extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleProjectServiceArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_project_service", resourceName);
  }

  get disable_dependent_services(): string {
    return `data.${this.resourceType}.${this.resourceName}.disable_dependent_services`;
  }

  get disable_on_destroy(): string {
    return `data.${this.resourceType}.${this.resourceName}.disable_on_destroy`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get service(): string {
    return `data.${this.resourceType}.${this.resourceName}.service`;
  }
}
