import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkSecurityGatewaySecurityPolicyRuleArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkSecurityGatewaySecurityPolicyRuleArgs {
  application_matcher?: string;
  basic_profile: string;
  description?: string;
  enabled: boolean;
  gateway_security_policy: string;
  location: string;
  name: string;
  priority: number;
  session_matcher: string;
  tls_inspection_enabled?: boolean;
  timeouts?: GoogleNetworkSecurityGatewaySecurityPolicyRuleArgsTimeouts;
}

export class google_network_security_gateway_security_policy_rule extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleNetworkSecurityGatewaySecurityPolicyRuleArgs) {
    const meta = {timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_security_gateway_security_policy_rule", resourceName);
  }

  get basic_profile(): string {
    return `${this.resourceType}.${this.resourceName}.basic_profile`;
  }

  get create_time(): string {
    return `${this.resourceType}.${this.resourceName}.create_time`;
  }

  get enabled(): string {
    return `${this.resourceType}.${this.resourceName}.enabled`;
  }

  get gateway_security_policy(): string {
    return `${this.resourceType}.${this.resourceName}.gateway_security_policy`;
  }

  get id(): string {
    return `${this.resourceType}.${this.resourceName}.id`;
  }

  get location(): string {
    return `${this.resourceType}.${this.resourceName}.location`;
  }

  get name(): string {
    return `${this.resourceType}.${this.resourceName}.name`;
  }

  get priority(): string {
    return `${this.resourceType}.${this.resourceName}.priority`;
  }

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get self_link(): string {
    return `${this.resourceType}.${this.resourceName}.self_link`;
  }

  get session_matcher(): string {
    return `${this.resourceType}.${this.resourceName}.session_matcher`;
  }

  get update_time(): string {
    return `${this.resourceType}.${this.resourceName}.update_time`;
  }
}
