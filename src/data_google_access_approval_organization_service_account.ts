import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleAccessApprovalOrganizationServiceAccountArgs {
  organization_id: string;
}

export class data_google_access_approval_organization_service_account extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleAccessApprovalOrganizationServiceAccountArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_access_approval_organization_service_account", resourceName);
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

  get organization_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.organization_id`;
  }
}
