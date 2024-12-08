import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleBinaryAuthorizationAttestorIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleBinaryAuthorizationAttestorIamBindingArgs {
  attestor: string;
  members: string[];
  role: string;
  condition?: GoogleBinaryAuthorizationAttestorIamBindingArgsCondition;
}

export class google_binary_authorization_attestor_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleBinaryAuthorizationAttestorIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_binary_authorization_attestor_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
