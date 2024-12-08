import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBinaryAuthorizationAttestorIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBinaryAuthorizationAttestorIamMemberArgs {
  attestor: string;
  member: string;
  role: string;
  condition?: GoogleBinaryAuthorizationAttestorIamMemberArgsCondition;
}

export class google_binary_authorization_attestor_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBinaryAuthorizationAttestorIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_binary_authorization_attestor_iam_member", resourceName);
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

  get member(): string {
    return `${this.resourceType}.${this.resourceName}.member`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
