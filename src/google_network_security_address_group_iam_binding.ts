import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkSecurityAddressGroupIamBindingArgsCondition {
  description?: string;
  expression: string;
  title: string;
}

export interface GoogleNetworkSecurityAddressGroupIamBindingArgs {
  members: string[];
  name: string;
  role: string;
  condition?: GoogleNetworkSecurityAddressGroupIamBindingArgsCondition;
}

export class google_network_security_address_group_iam_binding extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleNetworkSecurityAddressGroupIamBindingArgs) {
    const meta = {condition:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_security_address_group_iam_binding", resourceName);
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

  get members(): string {
    return `${this.resourceType}.${this.resourceName}.members`;
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
