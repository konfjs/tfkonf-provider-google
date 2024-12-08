import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleAccessContextManagerIngressPolicyArgsTimeouts {
  create?: string;
  delete?: string;
}

export interface GoogleAccessContextManagerIngressPolicyArgs {
  ingress_policy_name: string;
  resource: string;
  timeouts?: GoogleAccessContextManagerIngressPolicyArgsTimeouts;
}

export class google_access_context_manager_ingress_policy extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleAccessContextManagerIngressPolicyArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_access_context_manager_ingress_policy", resourceName);
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get ingress_policy_name(): string {
    return `${this.resourceType}.${this.resourceName}.ingress_policy_name`;
  }

  get resource(): string {
    return `${this.resourceType}.${this.resourceName}.resource`;
  }
}
