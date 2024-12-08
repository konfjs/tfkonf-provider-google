import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleAccessApprovalProjectServiceAccountArgs {
  project_id: string;
}

export class data_google_access_approval_project_service_account extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleAccessApprovalProjectServiceAccountArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_access_approval_project_service_account", resourceName);
  }

  get account_email(): string {
    return `data.${this.resourceType}.${this.resourceName}.account_email`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }

  get project_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.project_id`;
  }
}
