import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerEgressPolicyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleAccessContextManagerEgressPolicyArgs {
  egress_policy_name: string;
  resource: string;
  timeouts?: GoogleAccessContextManagerEgressPolicyArgsTimeouts;
}

export class google_access_context_manager_egress_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleAccessContextManagerEgressPolicyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_access_context_manager_egress_policy", resourceName);
  }

  get egress_policy_name(): string {
    return `${this.resourceType}.${this.resourceName}.egress_policy_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get resource(): string {
    return `${this.resourceType}.${this.resourceName}.resource`;
  }
}
