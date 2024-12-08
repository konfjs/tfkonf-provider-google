import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GooglePrivatecaCaPoolIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GooglePrivatecaCaPoolIamMemberArgs {
  ca_pool: string;
  member: string;
  role: string;
  condition?: GooglePrivatecaCaPoolIamMemberArgsCondition;
}

export class google_privateca_ca_pool_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GooglePrivatecaCaPoolIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_privateca_ca_pool_iam_member", resourceName);
  }

  get ca_pool(): string {
    return `${this.resourceType}.${this.resourceName}.ca_pool`;
  }

  get etag(): string {
    return `${this.resourceType}.${this.resourceName}.etag`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
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
