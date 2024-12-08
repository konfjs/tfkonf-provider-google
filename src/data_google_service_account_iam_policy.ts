import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleServiceAccountIamPolicyArgs {
  service_account_id: string;
}

export class data_google_service_account_iam_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: DataGoogleServiceAccountIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_service_account_iam_policy", resourceName);
  }

  get etag(): string {
    return `data.${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `data.${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `data.${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get service_account_id(): string {
    return `data.${this.resourceType}.${this.resourceName}.service_account_id`;
  }
}
