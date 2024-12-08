import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkSecurityAddressGroupIamMemberArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleNetworkSecurityAddressGroupIamMemberArgs {
  member: string;
  name: string;
  role: string;
  condition?: GoogleNetworkSecurityAddressGroupIamMemberArgsCondition;
}

export class google_network_security_address_group_iam_member extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleNetworkSecurityAddressGroupIamMemberArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_security_address_group_iam_member", resourceName);
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

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get role(): string {
    return `${this.resourceType}.${this.resourceName}.role`;
  }
}
