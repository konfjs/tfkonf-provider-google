import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleAccessApprovalFolderServiceAccountArgs {
  folder_id: string;
}

export class data_google_access_approval_folder_service_account extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleAccessApprovalFolderServiceAccountArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_access_approval_folder_service_account", resourceName);
  }

  get account_email(): string {
    return `data.${this.resourceType}.${this.resourceName}.account_email`;
  }

  get folder_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.folder_id`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get name(): string {
    return `data.${this.resourceType}.${this.resourceName}.name`;
  }
}
