import { TerraformConfig, TerraformResource } from "@tfkonf/core";

export interface GoogleNetworkServicesLbRouteExtensionArgsExtensionChainsExtensions {
  authority?: string;
  fail_open?: boolean;
  forward_headers?: string[];
  name: string;
  service: string;
  timeout?: string;
}

export interface GoogleNetworkServicesLbRouteExtensionArgsExtensionChainsMatchCondition {
  cel_expression: string;
}

export interface GoogleNetworkServicesLbRouteExtensionArgsExtensionChains {
  name: string;
  extensions: GoogleNetworkServicesLbRouteExtensionArgsExtensionChainsExtensions[];
  match_condition: GoogleNetworkServicesLbRouteExtensionArgsExtensionChainsMatchCondition;
}

export interface GoogleNetworkServicesLbRouteExtensionArgsTimeouts {
  create?: string;
  delete?: string;
  update?: string;
}

export interface GoogleNetworkServicesLbRouteExtensionArgs {
  description?: string;
  forwarding_rules: string[];
  labels?: { [key: string]: string };
  load_balancing_scheme: string;
  location: string;
  name: string;
  extension_chains: GoogleNetworkServicesLbRouteExtensionArgsExtensionChains[];
  timeouts?: GoogleNetworkServicesLbRouteExtensionArgsTimeouts;
}

export class google_network_services_lb_route_extension extends TerraformResource {
  constructor(protected readonly terraformConfig: TerraformConfig, protected readonly resourceName: string, readonly args: GoogleNetworkServicesLbRouteExtensionArgs) {
    const meta = {extension_chains:{isBlock:true,extensions:{isBlock:true},match_condition:{isBlock:true}},timeouts:{isBlock:true}};
    super(terraformConfig, "resource", args, meta, "google_network_services_lb_route_extension", resourceName);
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

  get load_balancing_scheme(): string {
    return `${this.resourceType}.${this.resourceName}.load_balancing_scheme`;
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
