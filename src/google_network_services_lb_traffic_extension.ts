import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkServicesLbTrafficExtensionArgsExtensionChainsExtensions {
  authority?: string;
  fail_open?: boolean;
  forward_headers?: string[];
  name: string;
  service: string;
  supported_events?: string[];
  timeout?: string;
}

export interface GoogleNetworkServicesLbTrafficExtensionArgsExtensionChainsMatchCondition {
  cel_expression: string;
}

export interface GoogleNetworkServicesLbTrafficExtensionArgsExtensionChains {
  name: string;
  extensions: GoogleNetworkServicesLbTrafficExtensionArgsExtensionChainsExtensions[];
  match_condition: GoogleNetworkServicesLbTrafficExtensionArgsExtensionChainsMatchCondition;
}

export interface GoogleNetworkServicesLbTrafficExtensionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkServicesLbTrafficExtensionArgs {
  description?: string;
  forwarding_rules: string[];
  labels?: { [key: string]: string };
  load_balancing_scheme?: string;
  location: string;
  name: string;
  extension_chains: GoogleNetworkServicesLbTrafficExtensionArgsExtensionChains[];
  timeouts?: GoogleNetworkServicesLbTrafficExtensionArgsTimeouts;
}

export class google_network_services_lb_traffic_extension extends TerraformResource {
  constructor(terraformConfig: TerraformConfig, resourceName: string, args: GoogleNetworkServicesLbTrafficExtensionArgs) {
    const meta = {extension_chains:{isBlock:true,extensions:{isBlock:true},match_condition:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_services_lb_traffic_extension", resourceName);
  }

  get effective_labels(): string {
    return `${this.resourceType}.${this.resourceName}.effective_labels`;
  }

  get forwarding_rules(): string {
    return `${this.resourceType}.${this.resourceName}.forwarding_rules`;
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

  get project(): string {
    return `${this.resourceType}.${this.resourceName}.project`;
  }

  get terraform_labels(): string {
    return `${this.resourceType}.${this.resourceName}.terraform_labels`;
  }
}
