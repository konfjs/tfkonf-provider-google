import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBinaryAuthorizationAttestorIamPolicyArgs {
  attestor: string;
  policy_data: string;
}

export class google_binary_authorization_attestor_iam_policy extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleBinaryAuthorizationAttestorIamPolicyArgs) {
    const meta = {};
    super(terraformConfig, "resource", args, meta, "google_binary_authorization_attestor_iam_policy", resourceName);
  }

  get attestor(): string {
    return `${this.resourceType}.${this.resourceName}.attestor`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get policy_data(): string {
    return `${this.resourceType}.${this.resourceName}.policy_data`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }
}
