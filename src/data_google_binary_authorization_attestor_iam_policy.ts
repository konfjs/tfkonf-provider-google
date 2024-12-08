import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface DataGoogleBinaryAuthorizationAttestorIamPolicyArgs {
  attestor: string;
}

export class data_google_binary_authorization_attestor_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: DataGoogleBinaryAuthorizationAttestorIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "data", args, meta, "google_binary_authorization_attestor_iam_policy", resourceName);
  }

  get attestor(): string {
    return `data.${this.resourceType}.${this.resourceName}.attestor`;
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

  get project(): string {
    return `data.${this.resourceType}.${this.resourceName}.project`;
  }
}
