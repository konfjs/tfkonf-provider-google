import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleDnsResponsePolicyRuleArgsLocalDataLocalDatas {
  name: string;
  rrdatas?: string[];
  ttl?: number;
  type: string;
}

export interface GoogleDnsResponsePolicyRuleArgsLocalData {
  local_datas: GoogleDnsResponsePolicyRuleArgsLocalDataLocalDatas[];
}

export interface GoogleDnsResponsePolicyRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleDnsResponsePolicyRuleArgs {
  dns_name: string;
  response_policy: string;
  rule_name: string;
  local_data?: GoogleDnsResponsePolicyRuleArgsLocalData;
  timeouts?: GoogleDnsResponsePolicyRuleArgsTimeouts;
}

export class google_dns_response_policy_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleDnsResponsePolicyRuleArgs) {
    const meta = {local_data:{isBlock:true,local_datas:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_dns_response_policy_rule", resourceName);
  }

  get dns_name(): string {
    return `${this.resourceType}.${this.resourceName}.dns_name`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get response_policy(): string {
    return `${this.resourceType}.${this.resourceName}.response_policy`;
  }

  get rule_name(): string {
    return `${this.resourceType}.${this.resourceName}.rule_name`;
  }
}
