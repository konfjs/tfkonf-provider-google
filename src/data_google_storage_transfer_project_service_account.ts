import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleStorageTransferProjectServiceAccountArgs {
}

export class data_google_storage_transfer_project_service_account extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleStorageTransferProjectServiceAccountArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_storage_transfer_project_service_account", resourceName);
  }

  get email(): string {
    return `data.${this.resourceType}.${this.resourceName}.email`;
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

  get subject_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.subject_id`;
  }
}
