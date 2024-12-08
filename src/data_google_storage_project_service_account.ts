import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleStorageProjectServiceAccountArgs {
  user_project?: string;
}

export class data_google_storage_project_service_account extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleStorageProjectServiceAccountArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_storage_project_service_account", resourceName);
  }

  get email_address(): string {
    return `data.${this.resourceType}.${this.resourceName}.email_address`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get member(): string {
    return `data.${this.resourceType}.${this.resourceName}.member`;
  }

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
